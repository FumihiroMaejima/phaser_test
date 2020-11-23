<?php

namespace App\Policies;

use App\Model\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RolePolicy
{
    use HandlesAuthorization;

    /* 閲覧 */
    public function view(User $user)
    {
        $userTypes = [
            0,      // normal
            50,     // business
            99,     // administrator
            100     // system
        ];
        return (in_array($user->role, $userTypes));
    }

    /* 追加 */
    public function create(User $user)
    {
        $userTypes = [
            99,     // administrator
            100     // system
        ];
        return (in_array($user->role, $userTypes));
    }

    /* 変更 */
    public function update(User $user)
    {
        $userTypes = [
            50,     // business
            99,     // administrator
            100     // system
        ];
        return (in_array($user->role, $userTypes));
    }

    /* 削除 */
    public function delete(User $user)
    {
        $userTypes = [
            99,     // administrator
            100     // system
        ];
        return (in_array($user->role, $userTypes));
        // return ($user->role == 100); // 単一の場合
    }
}
