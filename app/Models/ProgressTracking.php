<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgressTracking extends Model
{
    use HasFactory;
    protected $table = 'progress_tracking';
    protected $fillable = [
        'enrollment_id',
        'event_id',
        'lessons_attended',
        'skills_attained',
        'can_finish_without_hiv',
        'can_stand_alone',
    ];
    // populate enrolment_id
    public function enrollment()
    {
        return $this->belongsTo(Enrollment::class, 'enrollment_id');
    }
    // populate event_id
    public function event()
    {
        return $this->belongsTo(Event::class, 'event_id');
    }
}
