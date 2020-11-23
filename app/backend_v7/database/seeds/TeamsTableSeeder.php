<?php

use Illuminate\Database\Seeder;

class TeamsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // データの挿入
        DB::table('teams')->insert([
            'department_id' => '3',
            'name' => '法人営業',
            'code' => 'corporation',
            'created_at' => '2020-06-14 00:00:00',
            'updated_at' => '2020-06-14 00:00:00'
        ]);
        DB::table('teams')->insert([
            'department_id' => '3',
            'name' => '個人営業',
            'code' => 'personal',
            'created_at' => '2020-06-14 00:00:00',
            'updated_at' => '2020-06-14 00:00:00'
        ]);
        DB::table('teams')->insert([
            'department_id' => '9',
            'name' => 'フロントエンド',
            'code' => 'frontend',
            'created_at' => '2020-06-14 00:00:00',
            'updated_at' => '2020-06-14 00:00:00'
        ]);
        DB::table('teams')->insert([
            'department_id' => '9',
            'name' => 'バックエンド',
            'code' => 'backend',
            'created_at' => '2020-06-14 00:00:00',
            'updated_at' => '2020-06-14 00:00:00'
        ]);
        DB::table('teams')->insert([
            'department_id' => '9',
            'name' => 'インフラ',
            'code' => 'infrastructure',
            'created_at' => '2020-06-14 00:00:00',
            'updated_at' => '2020-06-14 00:00:00'
        ]);
        DB::table('teams')->insert([
            'department_id' => '9',
            'name' => 'AI',
            'code' => 'ai',
            'created_at' => '2020-06-14 00:00:00',
            'updated_at' => '2020-06-14 00:00:00'
        ]);
        DB::table('teams')->insert([
            'department_id' => '9',
            'name' => 'デバック',
            'code' => 'debug',
            'created_at' => '2020-06-14 00:00:00',
            'updated_at' => '2020-06-14 00:00:00'
        ]);
        DB::table('teams')->insert([
            'department_id' => '9',
            'name' => 'アプリケーション',
            'code' => 'app',
            'created_at' => '2020-06-14 00:00:00',
            'updated_at' => '2020-06-14 00:00:00'
        ]);
        DB::table('teams')->insert([
            'department_id' => '9',
            'name' => 'モバイル',
            'code' => 'mobile',
            'created_at' => '2020-06-14 00:00:00',
            'updated_at' => '2020-06-14 00:00:00'
        ]);
        DB::table('teams')->insert([
            'department_id' => '9',
            'name' => '組み込み',
            'code' => 'embedded',
            'created_at' => '2020-06-14 00:00:00',
            'updated_at' => '2020-06-14 00:00:00'
        ]);
        DB::table('teams')->insert([
            'department_id' => '13',
            'name' => '第一事業部',
            'code' => 'first_operation',
            'created_at' => '2020-06-14 00:00:00',
            'updated_at' => '2020-06-14 00:00:00'
        ]);
        DB::table('teams')->insert([
            'department_id' => '13',
            'name' => '第二事業部',
            'code' => 'second_operation',
            'created_at' => '2020-06-14 00:00:00',
            'updated_at' => '2020-06-14 00:00:00'
        ]);
        DB::table('teams')->insert([
            'department_id' => '13',
            'name' => '第三事業部',
            'code' => 'third_operation',
            'created_at' => '2020-06-14 00:00:00',
            'updated_at' => '2020-06-14 00:00:00'
        ]);
    }
}
