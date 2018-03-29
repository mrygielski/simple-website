<?php

namespace App\Domain\Entities\Traits;

trait DefaultPrimaryKey
{
    /**
     * @var int
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="bigint")
     */
    public $id;
}