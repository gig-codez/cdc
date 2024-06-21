<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enrollment extends Model
{
    use HasFactory;
    protected $table = 'enrollments';

    protected $fillable = [
        'child_name',
        'address',
        'age_group',
        'hiv_status',
        'date_of_birth',
        'village',
        'schooling_status',
    ];
}
