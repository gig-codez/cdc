<?php
namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Event;
use App\Services\EventService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function __construct(
        protected EventService $eventService = new EventService(),
    ) {

    }
    public function index()
    {
        $data = $this->eventService->index();
        return Inertia::render('Dashboard/Events/ViewEvents', ['events' => $data]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Events/AddEvent');
    }

    public function store(Request $request)
    {
        try {
            // validate inputs
            $validated = $request->validate([
                'event_type' => 'required',
                'learning_outcomes' => 'required',
                'start_date' => 'required',
                'end_date' => 'required',
            ]);
            // handle event creation
            $this->eventService->store($validated);
            return redirect()->route('events.index');

        } catch (\Exception $th) {

            return redirect()->back()->withErrors(['message' => $th->getMessage()]);
        }
    }

    public function show(Event $event)
    {
        return Inertia::render('Events/Show', ['event' => $event]);
    }

    public function edit(Event $event)
    {
        $data = EventResource::make($event);
        return Inertia::render('Dashboard/Events/EditEvent', ['event' => $data]);
    }

    public function update(Request $request, Event $event)
    {
        try {
            // validate inputs
            $validated = $request->validate([
                'event_type' => 'required',
                'learning_outcomes' => 'required',
                'start_date' => 'required',
                'end_date' => 'required',
            ]);
            // handle event update
            $this->eventService->update($validated, $event);
            return redirect()->route('events.index');
        } catch (\Exception $ex) {
            return redirect()->back()->withErrors(['message' => $ex->getMessage()]);
        }

    }

    public function destroy(Event $event)
    {
        try {
            $event->delete();
            // session()->flash('message', 'Event deleted successfully');
            return redirect()->route('events.index');

        } catch (\Exception $ex) {
            return redirect()->back()->withErrors(['message' => $ex->getMessage()]);
        }
    }
}
