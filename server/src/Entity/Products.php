<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"product:read"}},
 *     denormalizationContext={"groups"={"product:write"}}
 * )
 * @ORM\Entity(repositoryClass=ProductsRepository::class)
 * @ORM\HasLifecycleCallbacks
 */
class Products
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"product:read", "product:write"})
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @Groups({"product:read", "product:write"})
     * @ORM\Column(type="string", length=4000)
     */
    private $description;

    /**
     * @Groups({"product:read", "product:write"})
     * @ORM\Column(type="integer")
     */
    private $price;

    /**
     * @Groups({"product:read"})
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @Groups({"product:read"})
     * @ORM\Column(type="datetime")
     */
    private $modified_at;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

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
