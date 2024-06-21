<?php
namespace App\Services;

use App\Http\Resources\ProgressTrackingResource;
use App\Models\ProgressTracking;

class ProgressTrackingService
{
    public function __construct(
        protected ProgressTracking $progress = new ProgressTracking(),
    ) {
        //
    }
    public function index()
    {
        try {
            $progress = $this->progress->all();
            return ProgressTrackingResource::collection($progress);
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function store($data)
    {
        try {
            return $this->progress->create($data);
        } catch (\Exception $e) {
            throw $e;
        }

    }
// shoe
    public function show(ProgressTracking $progress)
    {
        try {
            return new ProgressTrackingResource($progress);
        } catch (\Exception $e) {
            throw $e;
        }
    }
    public function update($updatedData, ProgressTracking $progressUpdate)
    {
        try {
            $result = $progressUpdate->update($updatedData);
            return $result;
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function destroy(ProgressTracking $progressDeleted)
    {
        try {
            return $progressDeleted->delete();
        } catch (\Exception $e) {
            throw $e;
        }
    }
}
