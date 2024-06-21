<?php

namespace App\Services;

use App\Http\Resources\SkillsTrainingResource;
use App\Models\SkillsTraining;

class SkillsTrainingService
{
    public function __construct(
        protected SkillsTraining $skillsTraining = new SkillsTraining()

    ) {

    }
    //
    public function index()
    {
        try {
            $skills = $this->skillsTraining->all();
            return SkillsTrainingResource::collection($skills);
        } catch (\Exception $ex) {
            throw $ex;
        }
    }
    // store skills
    public function store(array $data)
    {
        try {
            $data = $this->skillsTraining->create($data);
            return $data;
        } catch (\Exception $ex) {
            throw $ex;
        }
    }
    // show skills
    public function show(SkillsTraining $skill)
    {
        try {

            return ($skill);
        } catch (\Exception $ex) {
            throw $ex;
        }
    }
    // update skills
    public function update(array $data, SkillsTraining $skill)
    {
        try {
            $skill->update($data);
            return $skill;
        } catch (\Exception $ex) {
            throw $ex;
        }
    }
    // delete skills
    public function destroy(SkillsTraining $skill)
    {
        try {
            $skill->delete();
            return $skill;
        } catch (\Exception $ex) {
            throw $ex;
        }
    }
}
