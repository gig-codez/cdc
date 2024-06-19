<?php
namespace App\Http\Controllers;

use App\Models\ProgressTracking;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProgressTrackingController extends Controller
{
    public function index()
    {
        $progress = ProgressTracking::all();
        return Inertia::render('Progress/Index', ['progress' => $progress]);
    }

    public function create()
    {
        return Inertia::render('Progress/Create');
    }

    public function store(Request $request)
    {
        ProgressTracking::create($request->all());
        return redirect()->route('progress.index');
    }

    public function show(ProgressTracking $progress)
    {
        return Inertia::render('Progress/Show', ['progress' => $progress]);
    }

    public function edit(ProgressTracking $progress)
    {
        return Inertia::render('Progress/Edit', ['progress' => $progress]);
    }

    public function update(Request $request, ProgressTracking $progress)
    {
        $progress->update($request->all());
        return redirect()->route('progress.index');
    }

    public function destroy(ProgressTracking $progress)
    {
        $progress->delete();
        return redirect()->route('progress.index');
    }
}