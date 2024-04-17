<?php

namespace App\Http\Controllers;

use App\Models\ChatMessage;
use Illuminate\Http\Request;
use Pusher; // Import Pusher facade

class SendMessageController extends Controller
{
    public function send(Request $request)
    {
        $sessionId = $request->session_id;
        $message = $request->message;

        // Validate session ID and message (optional)

        $newMessage = ChatMessage::create([
            'session_id' => $sessionId,
            'content' => $message,
            // Add user ID or other relevant information
        ]);

        // Broadcast the new message using Pusher
        $pusher = new Pusher(config('broadcasting.connections.pusher.key'), config('broadcasting.connections.pusher.secret'), config('broadcasting.connections.pusher.app_id'), [
            'cluster' => config('broadcasting.connections.pusher.options.cluster'),
        ]);

        $pusher->trigger('session.' . $sessionId, 'new-message', $newMessage->toArray());

        return response()->json(['message' => 'Message sent successfully']);
    }
}