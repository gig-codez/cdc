<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Auth/Login',);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function login(Request $request)
    {
        try {
           $credentials = Validator::validate($request->all() ,[
                'email' => 'required|email',
                'password' => 'required|max:20|password'
            ]);
                $credentials = $request->only('email', 'password');
                if (auth()->attempt($credentials)) {
                    return redirect()->route('dashboard');
                }else{
                    return redirect()->back()->withErrors(["message" => "Invalid credentials"]);
                }
        } catch (\Exception $th) {
            return redirect()->back()->withErrors(["message" => $th->getMessage()]);
       }
    }

    // dashboard 
    public function dashboard()
    {
        return Inertia::render('Dashboard/Index');
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
