<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkillsTraining extends Model
{
    use HasFactory;

    protected $table = 'skills_training';
    protected $fillable = [
        'enrolment_id',
        'skill_set',
        'event_id',
    ];
    // populate enrollment information
    public function enrollment()
    {
        return $this->belongsTo(Enrollment::class, 'enrolment_id');
    }
    // populate event information
    public function event()
    {
        return $this->belongsTo(Event::class, 'event_id');
    }
}
