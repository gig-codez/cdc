<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EducationalMaterial extends Model
{
    use HasFactory;

    protected $table= "educational_materials";

       protected $fillable = [
        'material_name', 
        'target_age_group', 
        'distributed_at'
    ];
}
