<?php

namespace App\Http\Controllers;

use App\Models\EducationalMaterial;
use App\Services\EducationalMaterialService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EducationalMaterialController extends Controller
{
    public function __construct(
        protected EducationalMaterialService $educationalMaterialService = new EducationalMaterialService(),
    ) {
        //
    }
    public function index()
    {
        $materials = $this->educationalMaterialService->index();
        return Inertia::render('Dashboard/Materials/ViewDistributions', ['materials' => $materials]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Materials/AddNewDistribution');
    }

    public function store(Request $request)
    {
        try {
            $valid = $request->validate([
                'material_name' => 'required|string',
                'target_age_group' => 'required|string',
                'distributed_at' => 'required|date',
            ]);
            $this->educationalMaterialService->store($valid);
            return redirect()->route('educational-materials.index');
        } catch (\Exception $th) {
            return redirect()->back()->withErrors(["message" => $th->getMessage()]);
        }
    }

    public function show(EducationalMaterial $educationalMaterial)
    {
        return Inertia::render('Dashboard/Materials/EditDistribution', ['material' => $educationalMaterial]);
    }

    public function edit(EducationalMaterial $educationalMaterial)
    {
        return Inertia::render('Dashboard/Materials/EditDistribution', ['material' => $educationalMaterial]);
    }

    public function update(Request $request, EducationalMaterial $educationalMaterial)
    {
        try {
            $valid = $request->validate([
                'material_name' => 'required|string',
                'target_age_group' => 'required|string',
                'distributed_at' => 'required|date',
            ]);
            $this->educationalMaterialService->update($valid, $educationalMaterial);
            return redirect()->route('educational-materials.index');
        } catch (\Exception $th) {
            return redirect()->back()->withErrors(["message" => $th->getMessage()]);
        }
    }

    public function destroy(EducationalMaterial $educationalMaterial)
    {
        $educationalMaterial->delete();
        return redirect()->route('educational-materials.index');
    }
}
