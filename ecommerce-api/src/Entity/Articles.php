<?php

namespace App\Entity;

use App\Repository\ArticlesRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use App\Controller\GetArticleBySlugController;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Put;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;

// #[ApiResource(paginationItemsPerPage: 2)]
#[ORM\Entity(repositoryClass: ArticlesRepository::class)]
#[ApiFilter(OrderFilter::class, properties: ['price'])]
#[ApiResource(
    operations: [
        new Get(),
        new GetCollection(),
        new Put(),
        new Post(),
        new Patch(),
        new Delete(),
        new Get(
            name: 'get_article_by_slug',
            uriTemplate: '/articles/{slug}',
            requirements: [
                'slug' => '\w+'
            ],
            controller: GetArticleBySlugController::class,
            uriVariables: [
                'slug' => new Link(fromProperty: 'slug', fromClass: Articles::class)
            ],

        ),
        new GetCollection(
            uriTemplate: '/articles/type/{id}',
            uriVariables: [
                'id' => new Link(fromProperty: 'articles', fromClass: Types::class)
            ],
            normalizationContext: [
                'groups' => ['article:list']
            ],
        )
    ]
)]
class Articles
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['article:list'])]
    private ?string $name = null;

    #[ORM\Column]
    #[Groups(['article:list'])]
    private ?float $price = null;

    #[ORM\Column(length: 255)]
    #[Groups(['article:list'])]
    private ?string $images = null;

    #[ORM\Column(length: 255)]
    #[Groups(['article:list', 'slug:read'])]
    private ?string $slug = null;

    #[ORM\ManyToOne(inversedBy: 'articles')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['article:list', 'types:read'])]
    private ?Types $type = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getImages(): ?string
    {
        return $this->images;
    }

    public function setImages(string $images): static
    {
        $this->images = $images;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }

    public function getType(): ?Types
    {
        return $this->type;
    }

    public function setType(?Types $type): static
    {
        $this->type = $type;

        return $this;
    }
}
