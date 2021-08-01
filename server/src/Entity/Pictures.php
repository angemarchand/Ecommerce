<?php

namespace App\Entity;

use App\Controller\PicturesByProduct;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PicturesRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ApiResource(
 *     normalizationContext={"groups"={"pictures:read"}},
 *     denormalizationContext={"groups"={"pictures:write"}}
 * )
 * @ORM\Entity(repositoryClass=PicturesRepository::class)
 */

#[ApiResource (
    collectionOperations: [
        'getImagesByProductId' => [
            'path' => 'pictures/product',
            'method' => 'get',
            'controller' => PicturesByProduct::class,
        ],
        'get',
        'post'
    ]
)]

class Pictures
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"pictures:read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     * @Groups({"pictures:read", "pictures:write"})
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"pictures:read", "pictures:write"})
     */
    public $id_product;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"pictures:read", "pictures:write"})
     */
    private $alt;

    /**
     * @ORM\Column(type="string", length=4294967295)
     * @Groups({"pictures:read", "pictures:write"})
     */
    private $imageB64;

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

    public function getIdProduct(): ?int
    {
        return $this->id_product;
    }

    public function setIdProduct(int $id_product): self
    {
        $this->id_product = $id_product;

        return $this;
    }

    public function getAlt(): ?string
    {
        return $this->alt;
    }

    public function setAlt(?string $alt): self
    {
        $this->alt = $alt;

        return $this;
    }

    public function getImageB64(): ?string
    {
        return $this->imageB64;
    }

    public function setImageB64(string $imageB64): self
    {
        $this->imageB64 = $imageB64;

        return $this;
    }
}
