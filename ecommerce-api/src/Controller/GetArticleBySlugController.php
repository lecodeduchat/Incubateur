<?php

namespace App\Controller;

use App\Repository\ArticlesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;


class GetArticleBySlugController extends AbstractController
{
    // #[Route('/api/articles/{id}', name: 'get_article_by_id', methods: ['GET'])]
    // public function getArticleById(
    //     ArticlesRepository $articlesRepository,
    //     NormalizerInterface $normalizer,
    //     $id
    // ): Response {
    //     echo "test route".$id;
    //     return $this->json(
    //         $normalizer->normalize(
    //             $articlesRepository->find($id),
    //             context: ['groups' => 'id:read']
    //         )
    //     );
    // }

    #[Route('/article/{slug}', name: 'get_article_by_slug', methods: ['GET'])]
    public function getArticleBySlug(
        ArticlesRepository $articlesRepository,
        NormalizerInterface $normalizer,
        string $slug
    ): Response {
        $slug = urldecode($slug);
        // echo "Slug test : " . $slug . "<br>";
        $result = $articlesRepository->findBySlug($slug);
        // $article = json_encode($result);
        // echo "Article test: " . $result->getName() . "<br>";
        return $this->json($result);
    }
}
