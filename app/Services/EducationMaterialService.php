<?php

namespace App\Services;

use App\Http\Resources\EducationMaterialResource;
use App\Models\EducationalMaterial;

class EducationalMaterialService
{
    public function __construct(
        protected EducationalMaterial $material = new EducationalMaterial()
    ) {
        //
    }

    public function index()
    {
        try {
            $materials = $this->material->all();
            return EducationMaterialResource::collection($materials);
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    public function store(array $data)
    {
        try {
            $data = $this->material->create($data);
            return $data;
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    public function show(EducationalMaterial $material)
    {
        try {
            return EducationMaterialResource::make($material);
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    public function update(array $data, EducationalMaterial $material)
    {
        try {
            $material->update($data);
            return $material;
        } catch (\Exception $ex) {
            throw $ex;
        }
    }

    public function destroy(EducationalMaterial $material)
    {
        try {
            return $material->delete();
        } catch (\Exception $ex) {
            throw $ex;
        }
    }
}
