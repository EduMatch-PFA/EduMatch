<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChatMessage extends Model
{
    use HasFactory;

    protected $fillable = [
        'session_id',
        'sender_id',
        'content',
    ];

    public function session()
    {
        return $this->belongsTo(Session::class);
    }

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id'); // Specify foreign key column name
    }
}