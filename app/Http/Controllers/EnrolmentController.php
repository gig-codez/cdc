<?php
namespace App\Http\Controllers;

use App\Models\Enrolment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EnrolmentController extends Controller
{
    public function index()
    {
        $enrollments = Enrolment::all();
        return Inertia::render('Enrollments/Index', ['enrollments' => $enrollments]);
    }

    public function create()
    {
        return Inertia::render('Enrollments/Create');
    }

    public function store(Request $request)
    {
        Enrolment::create($request->all());
        return redirect()->route('enrollments.index');
    }

    public function show(Enrolment $enrolment)
    {
        return Inertia::render('Enrollments/Show', ['enrolment' => $enrolment]);
    }

    public function edit(Enrolment $enrolment)
    {
        return Inertia::render('Enrollments/Edit', ['enrolment' => $enrolment]);
    }

    public function update(Request $request, Enrolment $enrolment)
    {
        $enrolment->update($request->all());
        return redirect()->route('enrollments.index');
    }

    public function destroy(Enrolment $enrolment)
    {
        $enrolment->delete();
        return redirect()->route('enrollments.index');
    }
}