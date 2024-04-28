<?php

namespace App\Http\Controllers;

use App\Models\ChatMessage;
use App\Events\ChatMessageSent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class ChatMessageController extends Controller
{
    public function store(Request $request, $sessionId)
    {
        $message = new ChatMessage;
        $message->session_id = $sessionId;
        $message->sender_id = Auth::id();
        $message->content = $request->message;
        $message->save();

        event(new ChatMessageSent($message));

        return Inertia::share('message', $message); // Optionally share the saved message
    }

    public function getMessages(Request $request, $sessionId)
    {
        $messages = ChatMessage::where('session_id', $sessionId)->orderBy('created_at', 'asc')->get();
        return response()->json($messages);
    }
}