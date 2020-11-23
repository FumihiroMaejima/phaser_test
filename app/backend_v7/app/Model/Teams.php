<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Teams extends Model
{
    use SoftDeletes;

    //テーブル名指定
    protected $table = 'teams';

    // カラムの自動更新をEloquentに許可
    public $timestamps = true;

    // ソフトデリートの有効化(日付へキャストする属性)
    protected $dates = ['deleted_at'];

    // 更新可能なカラムリスト
    protected $fillable = [
        'department_id', 'name', 'code', 'updated_at'
    ];
}
