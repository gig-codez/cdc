<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProgressTrackingResource extends JsonResource
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
            'enrollment_id' => $this->enrollment->child_name,
            'event_id' => $this->event->event_type,
            'lessons_attended' => $this->lessons_attended,
            'skills_attained' => $this->skills_attained,
            'can_finish_without_hiv' => $this->can_finish_without_hiv,
            'can_stand_alone' => $this->can_stand_alone,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
