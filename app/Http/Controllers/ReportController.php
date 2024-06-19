<?php

// app/Http/Controllers/ReportController.php

namespace App\Http\Controllers;

use App\Models\Enrolment;
use App\Models\Event;
use App\Models\ProgressTracking;
use App\Models\EducationalMaterial;
use App\Models\SkillsTraining;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function index()
    {
        // Gather data for reports
        $enrolments = Enrolment::all();
        $events = Event::all();
        $progressTracking = ProgressTracking::with(['enrolment', 'event'])->get();
        $educationalMaterials = EducationalMaterial::all();
        $skillsTraining = SkillsTraining::with(['enrolment', 'event'])->get();

        // Pass data to the view
        return Inertia::render('Reports/Index', [
            'enrolments' => $enrolments,
            'events' => $events,
            'progressTracking' => $progressTracking,
            'educationalMaterials' => $educationalMaterials,
            'skillsTraining' => $skillsTraining
        ]);
    }

    public function show($id)
    {
        // Example for showing detailed report for a single enrolment
        $enrolment = Enrolment::with(['progressTracking', 'skillsTraining'])->findOrFail($id);

        return Inertia::render('Reports/Show', [
            'enrolment' => $enrolment
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
