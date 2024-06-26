<?php
namespace App\Http\Controllers;

use App\Models\ProgressTracking;
use App\Services\EnrollmentService;
use App\Services\EventService;
use App\Services\ProgressTrackingService;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProgressTrackingController extends Controller
{
    public function __construct(
        protected ProgressTrackingService $progressService = new ProgressTrackingService(),
        protected EnrollmentService $enrollmentService = new EnrollmentService(),
        protected EventService $eventService = new EventService()
    ) {
        //
    }
    public function index()
    {
        $progress = $this->progressService->index();
        return Inertia::render('Dashboard/Tracking/ViewAllTrackRecords', ['progress' => $progress]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Tracking/AddTrackRecord', [
            'enrollments' => $this->enrollmentService->getAllEnrollments(),
            'events' => $this->eventService->index(),
        ]);
    }

    public function store(Request $request)
    {
        try {
            // validate inputs
            $valid = $request->validate([
                'enrollment_id' => ['required', 'numeric', Rule::exists('enrollments', 'id')],
                'event_id' => ['required', 'numeric', Rule::exists('events', 'id')],
                'lessons_attended' => 'required|numeric',
                'skills_attained' => 'required|string',
                'can_finish_without_hiv' => 'required|boolean',
                'can_stand_alone' => 'required|boolean',
            ]);
            // store data
            $this->progressService->store($valid);
            return redirect()->route('progress-tracking.index');
        } catch (\Exception $th) {
            return back()->withErrors(["message" => $th->getMessage()]);
        }
    }

    public function show(ProgressTracking $progress)
    {
        return Inertia::render('Progress/Show', ['progress' => $progress]);
    }

    public function edit(ProgressTracking $progress)
    {
        // $record = $this->progressService->show($progress);
        return Inertia::render('Dashboard/Tracking/EditTrackRecord', [
            'progress' => $progress,
            'enrollments' => $this->enrollmentService->getAllEnrollments(),
            'events' => $this->eventService->index(),
        ]);
    }

    public function update(Request $request, ProgressTracking $progress)
    {
        try {
            // validate inputs
            $valid = $request->validate([
                'enrollment_id' => ['required', 'numeric', Rule::exists('enrollments', 'id')],
                'event_id' => ['required', 'numeric', Rule::exists('events', 'id')],
                'lessons_attended' => 'required|numeric',
                'skills_attained' => 'required|string',
                'can_finish_without_hiv' => 'required|boolean',
                'can_stand_alone' => 'required|boolean',
            ]);
            // store data
            $this->progressService->update($valid, $progress);
            return redirect()->route('progress-tracking.index');
        } catch (\Exception $th) {
            return back()->withErrors(["message" => $th->getMessage()]);
        }
    }

    public function destroy(ProgressTracking $progress)
    {
        $progress->delete();
        return redirect()->route('progress-tracking.index');
    }
}
