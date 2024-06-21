<?php

namespace App\Http\Middleware;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'csrf_token' => csrf_token(),
            'flash' => [
                'success' => fn() => $request->session()->get('success_message'),
                'error' => fn() => $request->session()->get('error_message'),
            ],
            'user' => auth()->user() ? new UserResource($request->user()) : null, // $request->user() ? $request->user()->name: null,
            'app.name' => config('app.name'),
            // 'user.roles' =>  fn () => $request->user() ? $request->user()->roles->pluck("name")->implode(","): null,
        ]);
    }
}
