import { writeFileSync } from 'fs';

// Search Timeline

(async () => {
    //fetch query
    const result = fetch("https://x.com/i/api/graphql/TQmyZ_haUqANuyBcFBLkUw/SearchTimeline?variables=%7B%22rawQuery%22%3A%22elei%C3%A7%C3%A3o%202020%20caruaru%22%2C%22count%22%3A20%2C%22querySource%22%3A%22typed_query%22%2C%22product%22%3A%22Top%22%7D&features=%7B%22rweb_tipjar_consumption_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22communities_web_enable_tweet_community_results_fetch%22%3Atrue%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22articles_preview_enabled%22%3Atrue%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22creator_subscriptions_quote_tweet_preview_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22rweb_video_timestamps_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D", {
        "headers": {
          "accept": "*/*",
          "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
          "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
          "content-type": "application/json",
          "sec-ch-ua": "\"Opera GX\";v=\"109\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-client-transaction-id": "psC1DA1jzlzXW36bxLUDefCpMKS8zFirdvNazTy83mUKJj1kV+issuRmCdSZKl55hXj+g6RrrQ9/ROhPzXU8DuM1FBjepQ",
          "x-client-uuid": "d4127b37-6f2e-4824-9e5a-cf61c0505666",
          "x-csrf-token": "b0d2bc0424a8a67c7e5914b1563bf413fa77a8a2f08c6e988c48791c8cfd3f388b8f99c3177942ded8d0847b75de342e628ff2a5b58bc381fee83dd08dd5a1c9474e0d3938201a2b38c76ae868551ee7",
          "x-twitter-active-user": "yes",
          "x-twitter-auth-type": "OAuth2Session",
          "x-twitter-client-language": "en",
          "cookie": "night_mode=2; _ga=GA1.2.974280523.1716058318; g_state={\"i_l\":0}; kdt=kVQlXDVsPURG6KdzqZ6fDFTYGh5bMz3e1zUoKbN9; dnt=1; guest_id=v1%3A171892594564405064; guest_id_marketing=v1%3A171892594564405064; guest_id_ads=v1%3A171892594564405064; gt=1803932280815222987; auth_token=5522e21acfbc63c8ae4fa50e5f344bd42e8fcf69; ct0=b0d2bc0424a8a67c7e5914b1563bf413fa77a8a2f08c6e988c48791c8cfd3f388b8f99c3177942ded8d0847b75de342e628ff2a5b58bc381fee83dd08dd5a1c9474e0d3938201a2b38c76ae868551ee7; lang=en; twid=u%3D1803926707482824704; att=1-Y2TKHCxket3IHufyqlt0jJ41FLp0DDQ5wNndblpQ; personalization_id=\"v1_N715NebS3A6ciQgT41ByXQ==\"",
          "Referer": "https://x.com/search?q=elei%C3%A7%C3%A3o+2020+caruaru&src=typed_query",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
      });

    const resultJson = await result.json()

    const JSONToFile = (obj, filename) =>
    writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));

    JSONToFile(resultJson, './data/test');
})()