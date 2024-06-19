<?php

namespace App\Http\Controllers;

use App\Models\EducationalMaterial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EducationalMaterialController extends Controller
{
    public function index()
    {
        $materials = EducationalMaterial::all();
        return Inertia::render('EducationalMaterials/Index', ['materials' => $materials]);
    }

    public function create()
    {
        return Inertia::render('EducationalMaterials/Create');
    }

    public function store(Request $request)
    {
        EducationalMaterial::create($request->all());
        return redirect()->route('educational-materials.index');
    }

    public function show(EducationalMaterial $educationalMaterial)
    {
        return Inertia::render('EducationalMaterials/Show', ['material' => $educationalMaterial]);
    }

    public function edit(EducationalMaterial $educationalMaterial)
    {
        return Inertia::render('EducationalMaterials/Edit', ['material' => $educationalMaterial]);
    }

    public function update(Request $request, EducationalMaterial $educationalMaterial)
    {
        $educationalMaterial->update($request->all());
        return redirect()->route('educational-materials.index');
    }

    public function destroy(EducationalMaterial $educationalMaterial)
    {
        $educationalMaterial->delete();
        return redirect()->route('educational-materials.index');
    }
}