<?php

namespace App\Traits;
use App\Models\User;
trait UserTrait
{
    public function getLoggedUser(): User
    {
        return auth()->check() ? auth()->user() : NULL;
    }
}
