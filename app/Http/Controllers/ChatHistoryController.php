<?php

namespace App\Http\Controllers;

use App\Models\ChatMessage;
use Illuminate\Http\Request;
use Pusher; // Import Pusher facade

class ChatHistoryController extends Controller
{
    public function getHistory(Request $request)
    {
        $sessionId = $request->session_id;

        // Validate session ID (optional)

        $messages = ChatMessage::where('session_id', $sessionId)->orderBy('created_at')->get();

        return Inertia::render('Chat', compact('messages')); // Replace 'Chat' with your view name
    }
}