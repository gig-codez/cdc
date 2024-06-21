<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\EnrollmentService;
use App\Services\EventService;
use App\Services\ProgressTrackingService;
use App\Services\SkillsTrainingService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct(
        protected EnrollmentService $enrollmentService = new EnrollmentService(),
        protected EventService $eventService = new EventService(),
        protected ProgressTrackingService $progressTrackingService = new ProgressTrackingService(),
        // protected EducationalMaterialService $educationalMaterialService = new EducationalMaterialService(),
        protected SkillsTrainingService $skillsTrainingService = new SkillsTrainingService()
    ) {

    }

    public function dashboard()
    {
        return Inertia::render('Dashboard/Index', [
            'user' => Auth::user(),
            'enrollments' => $this->enrollmentService->getAllEnrollments(),
            'events' => $this->eventService->index(),
            'progressTracking' => $this->progressTrackingService->index(),
            'educationalMaterials' => 0, //$this->educationalMaterialService->index(),
            'skillsTraining' => $this->skillsTrainingService->index(),
        ]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
