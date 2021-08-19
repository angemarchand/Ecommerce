<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ProductsRepository;
use App\Controller\MostVisitedProducts;


/**
 * @ApiResource(
 *     normalizationContext={"skip_null_values" = false, "groups"={"product:read"}},
 *     denormalizationContext={"groups"={"product:write"}},
 *     attributes={"pagination_maximum_items_per_page"=4}
 * )
 * @ORM\Entity(repositoryClass=ProductsRepository::class)
 * @ORM\HasLifecycleCallbacks
 */
#[ApiResource (
    collectionOperations: [
        'getMostVisitedProducts' => [
            'path' => 'products/mostVisited',
            'method' => 'get',
            'controller' => MostVisitedProducts::class,
        ],
        'get',
        'post'
    ]
)]

class Products
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"product:read"})
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

    /**
     * @Groups({"product:read", "product:write"})
     * @ORM\Column(type="integer")
     */
    private $stock;

    /**
     * @ORM\ManyToMany(targetEntity=Categories::class, inversedBy="products")
     * @Groups({"product:read", "product:write"})
     */
    private $categories;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"product:read", "product:write"})
     */
    private $visits;

    /**
<<<<<<< HEAD
     * @ORM\Column(type="integer", nullable=true)
     */
    private $discount;
=======
     * @ORM\OneToMany(targetEntity=Cart::class, mappedBy="products", orphanRemoval=true)
     */
    private $carts;

>>>>>>> 5fa38a4191d4688e22ce6aa364a846358b24ad0d

    public function __construct()
    {
        $this->categories = new ArrayCollection();
        $this->carts = new ArrayCollection();
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

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(int $stock): self
    {
        $this->stock = $stock;

        return $this;
    }

    /**
     * @return Collection|Categories[]
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Categories $category): self
    {
        if (!$this->categories->contains($category)) {
            $this->categories[] = $category;
        }

        return $this;
    }

    public function removeCategory(Categories $category): self
    {
        $this->categories->removeElement($category);

        return $this;
    }

    public function getVisits(): ?int
    {
        return $this->visits;
    }

    public function setVisits(?int $visits): self
    {
        $this->visits = $visits;

        return $this;
    }

    public function getDiscount(): ?int
    {
        return $this->discount;
    }

    public function setDiscount(?int $discount): self
    {
        $this->discount = $discount;
    }
    
    /**
     * @return Collection|Cart[]
     */
    public function getCarts(): Collection
    {
        return $this->carts;
    }

    public function addCart(Cart $cart): self
    {
        if (!$this->carts->contains($cart)) {
            $this->carts[] = $cart;
            $cart->setProducts($this);
        }

        return $this;
    }

    public function removeCart(Cart $cart): self
    {
        if ($this->carts->removeElement($cart)) {
            // set the owning side to null (unless already changed)
            if ($cart->getProducts() === $this) {
                $cart->setProducts(null);
            }
        }

        return $this;
    }

}
