<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EnrollmentResource extends JsonResource
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
            'child_name' => $this->child_name,
            'address' => $this->address,
            'age_group' => $this->age_group,
            'hiv_status' => $this->hiv_status,
            'date_of_birth' => $this->date_of_birth,
            'village' => $this->village,
            'schooling_status' => $this->schooling_status,
        ];
    }
}
