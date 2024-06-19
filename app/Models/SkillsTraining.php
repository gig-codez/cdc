<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkillsTraining extends Model
{
    use HasFactory;

    protected $table = 'skills_trainings';
    protected $fillable = [
        'enrolment_id', 
        'skill_set', 
        'event_id'
    ];
}