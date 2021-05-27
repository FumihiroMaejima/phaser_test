<?php

return [
    'seeder' => [
        'password' => [
            'testuser'  => env('TEST_USR_SEEDER_PASSWORD', 'password'),
            'testadmin' => env('TEST_ADMIN_SEEDER_PASSWORD', 'password')
        ]
    ],
    'test' => [
        'user' => [
            'login' => [
                'email'    => 'test' . 'user1' . '@example.com',
                'password' => env('TEST_USR_SEEDER_PASSWORD', 'password')
            ]
        ],
        'game' => [
            'enemies' => []
        ]
    ],
    'headers' => [
        'id'        => 'X-Auth-ID',
        'authority' => 'X-Auth-Authority'
    ],
    'executionRole' => [
        'services' => [
            'game' => [
                'enemies' => ['master', 'administrator', 'develop']
            ]
        ]
    ],
    'file' => [],
    'slack' => [
        'channel' => env('APP_SLACK_CHANNEL', 'channel_title'),
        'name'    => env('APP_SLACK_NAME', 'bot-name'),
        'icon'    => env('APP_SLACK_ICON', ':ghost:'),
        'url'     => env('APP_SLACK_WEBHOOK_URL', 'https://hooks.slack.com/services/test'),
    ],
    'service' => [
        'game' => [
            'enemies' => []
        ]
    ]
];
