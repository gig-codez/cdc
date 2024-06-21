<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SkillsTrainingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'enrolment_id' => $this->enrollment->child_name,
            'skill_set' => $this->skill_set,
            'event_id' => $this->event->event_type,
        ];
    }
}
