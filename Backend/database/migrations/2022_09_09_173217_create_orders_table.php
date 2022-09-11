<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('addr1')->nullable();
            $table->string('addr2')->nullable();
            $table->string('date');
            $table->string('inform')->nullable();
            $table->string('phone_client')->nullable();
            $table->string('phone_driver')->nullable();
            $table->integer('moderator_checked')->nullable()->default('0');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
