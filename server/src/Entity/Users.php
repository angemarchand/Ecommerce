<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"users:read"}},
 *     denormalizationContext={"groups"={"users:write"}}
 * )
 * @ORM\Entity(repositoryClass=UsersRepository::class)
 * @ORM\HasLifecycleCallbacks
 */
class Users
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"users:read", "users:write"})
     * @ORM\Column(type="string", length=100)
     */
    private $email;

    /**
     * @Groups({"users:read", "users:write"})
     * @ORM\Column(type="string", length=100)
     */
    private $name;

    /**
     * @Groups({"users:read", "users:write"})
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @Groups({"users:read"})
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @Groups({"users:read"})
     * @ORM\Column(type="datetime")
     */
    private $modified_at;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getModifiedAt(): ?\DateTimeInterface
    {
        return $this->modified_at;
    }

    public function setModifiedAt(\DateTimeInterface $modified_at): self
    {
        $this->modified_at = $modified_at;

        return $this;
    }

    /**
    * @ORM\PrePersist
    * @ORM\PreUpdate
    */
    public function updatedTimestamps(): void
    {
        $this->setModifiedAt(new \DateTime('now'));    
        if ($this->getCreatedAt() === null) {
            $this->setCreatedAt(new \DateTime('now'));
    }
}
}
