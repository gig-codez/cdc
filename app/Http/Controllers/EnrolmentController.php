<?php
namespace App\Http\Controllers;

use App\Http\Resources\EnrollmentResource;
use App\Models\Enrollment;
use App\Services\EnrollmentService;
use App\Traits\UserTrait;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EnrolmentController extends Controller
{
    use UserTrait;
    public function __construct(
        public EnrollmentService $enrollmentService = new EnrollmentService(),
    ) {

    }
    public function index()
    {
        $data = $this->enrollmentService->getAllEnrollments();
        // dd($data);
        return Inertia::render('Dashboard/Enrollment/ViewMembers', ['data' => $data]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Enrollment/EnrollmentPage');
    }

    public function store(Request $request)
    {
        try {
            $validated = $this->validate($request, [
                'child_name' => 'required|string|max:255',
                'address' => 'required|string|max:255',
                'age_group' => 'required|in:10-14,15-19,19-24',
                'hiv_status' => 'required|string|max:255',
                'date_of_birth' => 'required|date',
                'village' => 'required|string|max:255',
                'schooling_status' => 'required|string|max:255',
            ]);
            $result = $this->enrollmentService->createEnrollment($validated);
            if ($result) {
                return redirect()->route('enrollments.index')->with('success_message', 'Enrollment created successfully');
            } else {
                return redirect()->back()->withErrors(['message' => 'Failed to create enrollment']);
            }

        } catch (\Exception $ex) {
            return redirect()->back()->withErrors(['message' => $ex->getMessage()]);
        }
    }

    public function show(Enrollment $enrolment)
    {
        return Inertia::render('Dashboard/Enrollments/ShowMember', ['data' => $enrolment]);
    }

    public function edit(Enrollment $enrolment)
    {
        $data = EnrollmentResource::make($enrolment);
        return Inertia::render('Dashboard/Enrollment/EditMember', ['member' => $data]);
    }

    public function update(Request $request, Enrollment $enrolment)
    {
        // validate the request
        $validated = $this->validate($request, [
            'child_name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'age_group' => 'required|in:10-14,15-19,19-24',
            'hiv_status' => 'required|string|max:255',
            'date_of_birth' => 'required|date',
            'village' => 'required|string|max:255',
            'schooling_status' => 'required|string|max:255',
        ]);
        $this->enrollmentService->updateEnrollment($validated, $enrolment);
        return redirect()->route('enrollments.index')->with('success_message', 'Enrollment updated successfully');
    }

    public function destroy(Enrollment $enrolment)
    {
        $enrolment->delete();
        return redirect()->route('enrollments.index');
    }
}
