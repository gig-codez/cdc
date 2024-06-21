<?php
namespace App\Http\Controllers;

use App\Models\SkillsTraining;
use App\Services\EnrollmentService;
use App\Services\EventService;
use App\Services\SkillsTrainingService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SkillsTrainingController extends Controller
{
    public function __construct(
        protected EnrollmentService $enrollmentService = new EnrollmentService(),
        protected SkillsTrainingService $skillsTraining = new SkillsTrainingService(),
        protected EventService $eventService = new EventService()
    ) {
        //
    }
    public function index()
    {
        $skills = $this->skillsTraining->index();
        return Inertia::render('Dashboard/Skills/ViewSkills', ['skills' => $skills]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Skills/AddSkill', [
            'events' => $this->eventService->index(),
            'enrollments' => $this->enrollmentService->getAllEnrollments(),
        ]);
    }

    public function store(Request $request)
    {
        try {
            // validate inputs
            $valid = $request->validate([
                'enrolment_id' => ['required', 'numeric'],
                'skill_set' => 'required|string',
                'event_id' => ['required', 'numeric'],
            ]);
            // store data
            $this->skillsTraining->store($valid);
            return redirect()->route('skills-training.index');
        } catch (\Exception $th) {
            return redirect()->back()->withErrors(["message" => $th->getMessage()]);
        }
    }

    public function show(SkillsTraining $skill)
    {
        return Inertia::render('Skills/Show', ['skill' => $skill]);
    }

    public function edit(SkillsTraining $skill)
    {
        $data = $this->skillsTraining->show($skill);
        return Inertia::render('Dashboard/Skills/EditSkill', [
            'skill' => $data,
            'events' => $this->eventService->index(),
            'enrollments' => $this->enrollmentService->getAllEnrollments(),
        ]);
    }

    public function update(Request $request, SkillsTraining $skill)
    {
        try {
            // validate inputs
            $valid = $request->validate([
                'enrolment_id' => ['required', 'numeric'],
                'skill_set' => 'required|string',
                'event_id' => ['required', 'numeric'],
            ]);
            // store data
            $this->skillsTraining->update($valid, $skill);
            return redirect()->route('skills-training.index');
        } catch (\Exception $th) {
            return redirect()->back()->withErrors(["message" => $th->getMessage()]);
        }
    }

    public function destroy(SkillsTraining $skill)
    {
        dd($skill->id);
        $skill->delete();
        return redirect()->route('skills-training.index');
    }
}
