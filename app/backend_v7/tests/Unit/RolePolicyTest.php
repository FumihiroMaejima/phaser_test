<?php

namespace Tests\Unit;

// use PHPUnit\Framework\TestCase;
use Tests\TestCase;
use Illuminate\Support\Facades\Gate;

class RolePolicyTest extends TestCase
{
    /**
     * role test data
     * param1.userId
     * param2.role
     * param3.result
     */
    public function roleDataProvider()
    {
        return [
            'role0' => [2, 0, false],
            'role50' => [3, 50, true],
            'role99' => [4, 99, true]
        ];
    }

    /**
     * A view role Test.
     *
     * @dataProvider roleDataProvider
     * @return void
     */
    public function testViewRoleCheck($id, $role, $result)
    {
        $user = (object) [
            'id'                => $id,
            'name'              => 'subadmin',
            'email'             => 'subadmin@example.com',
            'email_verified_at' => null,
            'password'          => 'password',
            'role'              => $role,
            'remember_token'    => null,
            'created_at'        => '2020-06-14 00:00:00',
            'updated_at'        => '2020-06-14 00:00:00',
            "deleted_at"        => null
        ];

        $userTypes = [50, 99, 100];

        // 閲覧
        if (in_array($user->role, $userTypes)) {
            echo 'view' . "\n";
            $this->assertTrue($result);
        } else {
            echo 'couldn\'t view' . "\n";
            $this->assertFalse($result);
        }
    }

    public function createRoleProvider()
    {
        return [
            'role0' => [2, 0, false],
            'role50' => [3, 50, false],
            'role99' => [4, 99, true]
        ];
    }

    /**
     * A create role Test.
     *
     * @dataProvider createRoleProvider
     * @return void
     */
    public function testCreateRoleCheck($id, $role, $result)
    {
        $user = (object) [
            'id'                => $id,
            'name'              => 'subadmin',
            'email'             => 'subadmin@example.com',
            'email_verified_at' => null,
            'password'          => 'password',
            'role'              => $role,
            'remember_token'    => null,
            'created_at'        => '2020-06-14 00:00:00',
            'updated_at'        => '2020-06-14 00:00:00',
            "deleted_at"        => null
        ];

        $userTypes = [99, 100];

        // 追加
        if (in_array($user->role, $userTypes)) {
            echo 'add' . "\n";
            $this->assertTrue($result);
        } else {
            echo 'couldn\'t add' . "\n";
            $this->assertFalse($result);
        }
    }


    public function updateRoleProvider()
    {
        return [
            'role0' => [2, 0, false],
            'role50' => [3, 50, true],
            'role99' => [4, 99, true]
        ];
    }

    /**
     * A update role Test.
     *
     * @dataProvider updateRoleProvider
     * @return void
     */
    public function testUpdateRoleCheck($id, $role, $result)
    {
        $user = (object) [
            'id'                => $id,
            'name'              => 'subadmin',
            'email'             => 'subadmin@example.com',
            'email_verified_at' => null,
            'password'          => 'password',
            'role'              => $role,
            'remember_token'    => null,
            'created_at'        => '2020-06-14 00:00:00',
            'updated_at'        => '2020-06-14 00:00:00',
            "deleted_at"        => null
        ];

        $userTypes = [50, 99, 100];

        // 変更
        if (in_array($user->role, $userTypes)) {
            echo 'change' . "\n";
            $this->assertTrue($result);
        } else {
            echo 'couldn\'t change' . "\n";
            $this->assertFalse($result);
        }
    }

    public function deleteRoleProvider()
    {
        return [
            'role0' => [2, 0, false],
            'role50' => [3, 50, false],
            'role99' => [4, 99, true]
        ];
    }

    /**
     * A delete role Test.
     *
     * @dataProvider deleteRoleProvider
     * @return void
     */
    public function testDeleteViewRoleCheck($id, $role, $result)
    {
        $user = (object) [
            'id'                => $id,
            'name'              => 'subadmin',
            'email'             => 'subadmin@example.com',
            'email_verified_at' => null,
            'password'          => 'password',
            'role'              => $role,
            'remember_token'    => null,
            'created_at'        => '2020-06-14 00:00:00',
            'updated_at'        => '2020-06-14 00:00:00',
            "deleted_at"        => null
        ];

        $userTypes = [99, 100];

        // 削除
        if (in_array($user->role, $userTypes)) {
            echo 'delete' . "\n";
            $this->assertTrue($result);
        } else {
            echo 'couldn\'t delete' . "\n";
            $this->assertFalse($result);
        }
    }
}
