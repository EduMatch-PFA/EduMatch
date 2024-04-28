<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('chat_messages', function (Blueprint $table) {
        $table->id();
        $table->unsignedBigInteger('session_id');
        $table->foreign('session_id')->references('id')->on('sessions');
        $table->unsignedBigInteger('sender_id')->nullable();
        $table->foreign('sender_id')->references('id')->on('users');
        $table->text('content');
        $table->timestamps();
    });
}

public function down()
{
    Schema::dropIfExists('chat_messages');
}
};