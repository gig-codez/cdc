<?php
namespace App\Services;

use App\Http\Resources\EventResource;
use App\Models\Event;

class EventService
{
    protected $eventModel;
    public function __construct()
    {
        $this->eventModel = new Event();
        //
    }
    //  get all events
    public function index()
    {
        try {
            $events = $this->eventModel->all();
            $data = EventResource::collection($events);
            return $data;
        } catch (\Exception $ex) {
            throw $ex;
        }
    }
    // function to add event
    public function store($data)
    {
        try {
            $event = $this->eventModel->create($data);
            return new EventResource($event);
        } catch (\Exception $ex) {
            throw $ex;
        }
    }
    // function to update event
    public function update($data, Event $event)
    {
        try {
            $result = $event->update($data);
            return $result;
        } catch (\Exception $ex) {
            throw $ex;
        }
    }
    // function to delete event
    public function destroy(Event $eventData)
    {
        try {
            $result = $eventData->delete();
            return $result;
        } catch (\Exception $ex) {
            throw $ex;
        }
    }
}
