<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CartRepository;
use Doctrine\ORM\Mapping as ORM;
use App\Controller\CartByProductId;
use App\Controller\GetCartByUserIdProductId;

/**
 * @ORM\Entity(repositoryClass=CartRepository::class)
 */
#[ApiResource (
    collectionOperations: [
        'deleteCartByProductId' => [
            'path' => 'carts/product',
            'method' => 'delete',
            'controller' => CartByProductId::class,
        ],
        'GetCartByUserIdProductId' => [
            'path' => 'carts/product',
            'method' => 'get',
            'controller' => GetCartByUserIdProductId::class,
        ],
        'get',
        'post'
    ]
)]
class Cart
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Products::class, inversedBy="carts")
     * @ORM\JoinColumn(nullable=false)
     */
    private $products;

    /**
     * @ORM\ManyToOne(targetEntity=Users::class, inversedBy="carts")
     * @ORM\JoinColumn(nullable=false)
     */
    private $users;

    /**
     * @ORM\Column(type="integer")
     */
    private $quantity;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProducts(): ?Products
    {
        return $this->products;
    }

    public function setProducts(?Products $products): self
    {
        $this->products = $products;

        return $this;
    }

    public function getUsers(): ?Users
    {
        return $this->users;
    }

    public function setUsers(?Users $users): self
    {
        $this->users = $users;

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
