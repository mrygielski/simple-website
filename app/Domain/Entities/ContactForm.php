<?php

namespace App\Domain\Entities;

use Doctrine\ORM\Mapping as ORM;
use App\Domain\Entities\Traits\DefaultPrimaryKey;
use App\Domain\Entities\Traits\Timestamps;

/**
 * Wpisy z formularza kontaktowego
 * @ORM\Entity
 * @ORM\Table(name="contacts_form")
 * @ORM\HasLifecycleCallbacks
 */
class ContactForm
{
	use DefaultPrimaryKey;
	use Timestamps;

	/**
	 * @ORM\Column(type="text", nullable=false, length=256)
	 */
	public $name;

	/**
	 * @ORM\Column(type="text", nullable=false, length=256)
	 */
	public $email;

	/**
	 * @ORM\Column(type="text", nullable=false, length=24)
	 */
	public $phone;

	/**
	 * @ORM\Column(type="text", nullable=true, length=1024)
	 */
	public $title;

	/**
	 * @ORM\Column(type="text", nullable=true)
	 */
	public $text;
}