<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\BasketRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BasketRepository::class)
 */
#[ApiResource]
class Basket
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToMany(targetEntity=Products::class, inversedBy="baskets")
     */
    private $Products;

    /**
     * @ORM\OneToOne(targetEntity=Users::class, inversedBy="basket", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $Users;

    /**
     * @ORM\Column(type="integer")
     */
    private $quantity;

    public function __construct()
    {
        $this->Products = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|Products[]
     */
    public function getProducts(): Collection
    {
        return $this->Products;
    }

    public function addProduct(Products $product): self
    {
        if (!$this->Products->contains($product)) {
            $this->Products[] = $product;
        }

        return $this;
    }

    public function removeProduct(Products $product): self
    {
        $this->Products->removeElement($product);

        return $this;
    }

    public function getUsers(): ?Users
    {
        return $this->Users;
    }

    public function setUsers(Users $Users): self
    {
        $this->Users = $Users;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }
}
