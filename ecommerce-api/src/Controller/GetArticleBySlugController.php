<?php
namespace App\Controller;

use App\Repository\ArticlesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class GetArticleBySlugController extends AbstractController
{
    #[Route('/api/articles/{slug}', methods: ['GET'])]
    public function getArticleBySlug(ArticlesRepository $articlesRepository,
    NormalizerInterface $normalizer): Response
    {
        return $this->json(
            $normalizer->normalize($articlesRepository->findOneBy(['slug' => $slug])
            , ['groups' => 'slug:read']
        ));
    }
}