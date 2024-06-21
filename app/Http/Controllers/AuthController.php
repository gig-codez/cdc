<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Auth/Intro', );
    }
    public function showLoginForm()
    {
        return Inertia::render('Auth/Login');
    }
    /**
     * Show the form for creating a new resource.
     */
    public function login(Request $request)
    {
        try {
            //    dd($request->all());
            $credentials = $this->validate($request, [
                'email' => ['required'],
                'password' => ['required'],
            ]);

            if (Auth::attempt($credentials)) {
                $request->session()->regenerate();
                return redirect()->route('dashboard');
            } else {
                return back()->withErrors([
                    'message' => 'The provided credentials do not match our records.',
                ]);
            }

        } catch (\Exception $e) {
            return redirect()->back()->withErrors([
                'message' => $e->getMessage(),
            ]);
        }

    }

}
