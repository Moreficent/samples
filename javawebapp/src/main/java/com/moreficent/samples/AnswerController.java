package com.moreficent.samples;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
public class AnswerController {

    static final String[] ANSWERS = {
            "As I see it, yes",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again",
            "Don’t count on it",
            "It is certain",
            "It is decidedly so",
            "Most likely",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Outlook good",
            "Reply hazy, try again",
            "Signs point to yes",
            "Very doubtful",
            "Without a doubt",
            "Yes",
            "Yes – definitely",
            "You may rely on it"
    };

    static final ThreadLocal<Random> THREAD_RANDOM = new ThreadLocal<>();

    @RequestMapping("/answer")
    public String answer() {
        Random random = THREAD_RANDOM.get();
        if (null == random) {
            random = new Random(System.currentTimeMillis());
            THREAD_RANDOM.set(random);
        }
        final int idx = random.nextInt(ANSWERS.length);
        return ANSWERS[idx];
    }
}
