<?php

namespace App\Domain\Entities\Traits;

use Doctrine\ORM\Mapping AS ORM;

/**
 * Dodawanie znaczników czasu
 */
trait Timestamps
{
    /**
     * Data utworzenia rekordu
     * @var \DateTime
     * @ORM\Column(name="timestamp_created_at", type="datetime", nullable=false)
     */
    public $timestamp_created_at;

    /**
     * Data zaktualizowania rekordu
     * @var \DateTime
     * @ORM\Column(name="timestamp_updated_at", type="datetime", nullable=true)
     */
    public $timestamp_updated_at;

    /**
     * Wywoływane przed utworzeniem rekordu w bazie danych
     * @ORM\PrePersist()
     * @see http://doctrine-orm.readthedocs.org/projects/doctrine-orm/en/latest/reference/events.html#lifecycle-events
     */
    public function timestampsPrePersist()
    {
        $this->timestamp_created_at = new \DateTime('now');
        return $this;
    }

    /**
     * Wywoływanie przed zrobieniem update
     * @ORM\PreUpdate()
     * @see http://doctrine-orm.readthedocs.org/projects/doctrine-orm/en/latest/reference/events.html#lifecycle-events
     */
    public function timestampsPreUpdate()
    {
        $this->timestamp_updated_at = new \DateTime('now');
        return $this;
    }
}