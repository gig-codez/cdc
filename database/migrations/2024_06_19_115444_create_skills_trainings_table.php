<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */

    public function up()
    {
        Schema::create('skills_training', function (Blueprint $table) {
            $table->id();
            $table->foreignId('enrolment_id')->constrained('enrollments');
            $table->string('skill_set');
            $table->foreignId('event_id')->constrained('events');
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('skills_trainings');
    }
};
