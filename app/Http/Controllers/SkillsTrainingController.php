<?php
namespace App\Http\Controllers;

use App\Models\SkillsTraining;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SkillsTrainingController extends Controller
{
    public function index()
    {
        $skills = SkillsTraining::all();
        return Inertia::render('Skills/Index', ['skills' => $skills]);
    }

    public function create()
    {
        return Inertia::render('Skills/Create');
    }

    public function store(Request $request)
    {
        SkillsTraining::create($request->all());
        return redirect()->route('skills.index');
    }

    public function show(SkillsTraining $skill)
    {
        return Inertia::render('Skills/Show', ['skill' => $skill]);
    }

    public function edit(SkillsTraining $skill)
    {
        return Inertia::render('Skills/Edit', ['skill' => $skill]);
    }

    public function update(Request $request, SkillsTraining $skill)
    {
        $skill->update($request->all());
        return redirect()->route('skills.index');
    }

    public function destroy(SkillsTraining $skill)
    {
        $skill->delete();
        return redirect()->route('skills.index');
    }
}