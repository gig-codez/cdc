<?php

namespace App\Services;

use App\Models\Enrollment;

class EnrollmentService
{
    protected $enrollment;
    public function __construct()
    {
        $this->enrollment = new Enrollment();
    }

    // function to get all enrollments
    public function getAllEnrollments()
    {
        try {
            $data = $this->enrollment->all();
            return $data;
            // return EnrollmentResource::collection($data);
        } catch (\Exception $th) {
            throw $th;
        }

    }

    // function to create an enrollment
    public function createEnrollment($data)
    {
        try {
            $enrolled = Enrollment::create($data);
            return $enrolled;
        } catch (\Exception $th) {
            throw $th;
        }
    }
    // function to update an enrollment
    public function updateEnrollment($data, Enrollment $enrollment)
    {
        try {
            $enrollment->update($data);
            return $enrollment;
        } catch (\Exception $th) {
            throw $th;
        }
    }
}
